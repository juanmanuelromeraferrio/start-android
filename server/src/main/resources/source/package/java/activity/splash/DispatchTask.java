package #PACKAGE_NAME#.activity.splash;

import android.os.AsyncTask;

import #PACKAGE_NAME#.activity.BaseController;
import #PACKAGE_NAME#.activity.TaskResponse;
import #PACKAGE_NAME#.activity.home.HomeActivity;
import #PACKAGE_NAME#.activity.login.LoginActivity;
import #PACKAGE_NAME#.error.service.ServiceException;
import #PACKAGE_NAME#.service.api.UserService;

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
