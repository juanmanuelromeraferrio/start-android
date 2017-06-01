package com.android.start.activity.register;


import android.os.AsyncTask;

import com.android.start.activity.BaseController;
import com.android.start.activity.TaskResponse;
import com.android.start.dto.User;
import com.android.start.error.service.ServiceException;
import com.android.start.service.api.UserService;

/**
 * Created by Juan Manuel Romera on 17/5/2016.
 */
public class CreateAccountTask extends AsyncTask<User, Void, TaskResponse> {

    private static final boolean REMOTE_INTERESTS = false;
    private UserService userService;
    private BaseController controller;


    public CreateAccountTask(UserService userService, BaseController controller) {
        this.userService = userService;
        this.controller = controller;
    }

    @Override
    protected void onPreExecute() {
        if (controller != null)
            controller.initTask();
    }

    @Override
    protected TaskResponse doInBackground(User... params) {
        User user = params[0];
        try {
            userService.createUser(user);
        } catch (ServiceException e) {
            TaskResponse taskResponse = new TaskResponse(e.getMessage());
            return taskResponse;
        }

        return new TaskResponse();
    }

    @Override
    protected void onPostExecute(TaskResponse response) {
        if (controller != null)
            controller.finishTask();

        controller.onResult(response);
    }
}
