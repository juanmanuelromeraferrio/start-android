package com.android.start.activity.splash;

import android.os.AsyncTask;

import com.android.start.activity.BaseController;
import com.android.start.activity.TaskResponse;
import com.android.start.activity.home.HomeActivity;
import com.android.start.activity.login.LoginActivity;
import com.android.start.error.service.ServiceException;
import com.android.start.service.api.UserService;

/**
 * Created by Juan Manuel Romera on 17/5/2016.
 */
public class DispatchTask extends AsyncTask<Void, Void, TaskResponse> {


    private final UserService userService;
    private final BaseController controller;

    public DispatchTask(UserService userService, BaseController controller) {
        this.userService = userService;
        this.controller = controller;
    }


    @Override
    protected void onPreExecute() {
    }

    @Override
    protected TaskResponse doInBackground(Void... params) {
        TaskResponse taskResponse = new TaskResponse();
        try {
            if (userService.isUserLogged()) {
                taskResponse.setResponse(HomeActivity.class);
            } else {
                taskResponse.setResponse(LoginActivity.class);
            }
        } catch (ServiceException e) {
            taskResponse.setError(e.getMessage());
        }

        return taskResponse;
    }

    @Override
    protected void onPostExecute(TaskResponse response) {
        controller.onResult(response);
    }
}
