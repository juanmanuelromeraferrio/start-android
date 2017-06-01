package com.android.start.activity.login;


import com.android.start.R;
import com.android.start.activity.TaskResponse;
import com.android.start.service.factory.ServiceFactory;
import com.android.start.util.Validator;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public class LoginControllerImpl implements LoginController {

    private LoginView view;
    private Validator validator;

    public LoginControllerImpl(LoginView view) {
        this.view = view;
        this.validator = new Validator(view.getContext());
    }

    @Override
    public void loginUser(String email, String password) {
        boolean hasInputDataErrors = hasInputDataErrors(email, password);
        if (!hasInputDataErrors) {
            LoginUserTask task = new LoginUserTask(ServiceFactory.getUserService(), this);
            task.execute(email, password);
        }
    }

    private boolean hasInputDataErrors(String email, String password) {
        boolean error = false;

        if (!validator.isEmailValid(email)) {
            this.view.setEmailError(view.getContext().getResources().getString(R.string.error_invalid_email));
            error = true;
        }

        if (!validator.isPasswordValid(password)) {
            this.view.setPasswordError(view.getContext().getResources().getString(R.string.error_password, Validator.MIN_LENGTH_PASSWORD, Validator.MAX_LENGTH_PASSWORD));
            error = true;
        }

        return error;
    }

    @Override
    public void initTask() {
        this.view.showProgress();
    }

    @Override
    public void finishTask() {
        this.view.hideProgress();
    }

    @Override
    public void onResult(Object result) {
        TaskResponse response = (TaskResponse) result;
        if (response.hasError()) {
            view.onError(response.getError());
        } else {
            view.goToNext();
        }
    }
}
