package com.chatapi.chatapi.Controller

import com.chatapi.chatapi.Model.UserInputModel
import com.chatapi.chatapi.Model.UserModel
import com.chatapi.chatapi.Model.UserOutputModel
import com.chatapi.chatapi.Service.UserService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class testController(private val userService: UserService) {

    @PostMapping("publish")
    fun createUserAccount(
        @RequestBody userCredentials: UserInputModel,
    ): UserOutputModel {
        val user = UserModel(-1, userCredentials.username, userCredentials.password)
        val id = userService.createUser(user)
        return UserOutputModel(id, userCredentials.username);
    }

}