package #PACKAGE_NAME#.activity.register;


import android.os.AsyncTask;

import #PACKAGE_NAME#.activity.BaseController;
import #PACKAGE_NAME#.activity.TaskResponse;
import #PACKAGE_NAME#.dto.User;
import #PACKAGE_NAME#.error.service.ServiceException;
import #PACKAGE_NAME#.service.api.UserService;

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
