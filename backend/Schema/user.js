const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is Invalid.')
            }
        }    
    },
    password: {
        type: String,
        minlength: 7,
        trim: true,
        required: true,
        validate(value) {
            if(value.toLowerCase()==='password') {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    role: {
        type: String,
        required: true,
    },
    // avatar: {
    //     type: Buffer
    // },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

//define relationship between collections
//and use them with use of populate
userSchema.virtual('Lawyers', {
    ref: 'Lawyers',
    localField: '_id',
    foreignField: 'userId'
})

userSchema.virtual('Clients', {
    ref: 'Clients',
    localField: '_id',
    foreignField: 'userId'
})

userSchema.virtual('Cases', {
    ref: 'Cases',
    localField: '_id',
    foreignField: 'lawyer'
})

userSchema.virtual('Cases_client', {
    ref: 'Cases',
    localField: '_id',
    foreignField: 'client'
})


//user methods(instance methods)
userSchema.methods.getPublicProfile = function () {
    const user = this
    const userObject = user.toObject()

    userObject = { userId :userObject._id, role: userObject.role }

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, "thisisfinalyearproject")

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

//User Model methods
userSchema.statics.findByCredentials = async (email, password, role) => {
    const user = await User.findOne({email, role})
    if(!user) {
        throw new Error('Unable to login.')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
        throw new Error('Unable to login.')
    }
    return user
}

//Hash the plain text passwordd before hashing
userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

//Delete user tasks when user is removed
// userSchema.pre('remove', async function (next) {
//     const user = this
//     await Task.deleteMany({ owner: user._id })
//     next()
// })

const User = mongoose.model('User', userSchema)

module.exports = User