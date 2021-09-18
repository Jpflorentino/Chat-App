package com.chatapi.chatapi.Data

import com.chatapi.chatapi.Model.UserModel
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.MongoTemplate


class DatabaseAccess {
    fun createUser(user: UserModel): Int {
        val mongoOperations: MongoOperations = MongoTemplate(, "database")

        mongoOperations.insert<Any>(user)

        return 0
    }
}