package #PACKAGE_NAME#.activity.login;

import android.os.AsyncTask;

import #PACKAGE_NAME#.activity.BaseController;
import #PACKAGE_NAME#.activity.TaskResponse;
import #PACKAGE_NAME#.error.service.ServiceException;
import #PACKAGE_NAME#.service.api.UserService;


/**
 * Created by Juan Manuel Romera on 17/5/2016.
 */
public class LoginUserTask extends AsyncTask<String, Void, TaskResponse> {

    private UserService userService;
    private BaseController controller;

    public LoginUserTask(UserService userService, BaseController controller) {
        this.userService = userService;
        this.controller = controller;
    }

    @Override
    protected void onPreExecute() {
        if (controller != null)
            controller.initTask();
    }

    @Override
    protected TaskResponse doInBackground(String... params) {
        String email = params[0];
        String password = params[1];

        try {
            userService.loginUser(email, password);
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
