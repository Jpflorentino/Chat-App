package com.chatapi.chatapi.Service

import com.chatapi.chatapi.Data.DatabaseAccess
import com.chatapi.chatapi.Model.UserModel

class UserService(private val databaseAccess: DatabaseAccess) {
    fun createUser(user: UserModel): Int {
        /*
        if (userRepository.checkIfUserExists(user.username).isPresent)
            throw ExceptionsUser.UsernameAlreadyInUseException();

        user.password = utils.hashString(user.password!!)
        */
        return databaseAccess.createUser(user)
    }
}