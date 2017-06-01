package com.android.start.activity.register;


import com.android.start.activity.TaskResponse;
import com.android.start.dto.User;
import com.android.start.service.factory.ServiceFactory;
import com.android.start.util.Validator;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public class CreateAccountControllerImpl implements CreateAccountController {

    private CreateAccountView view;
    private Validator validator;

    public CreateAccountControllerImpl(CreateAccountView view) {
        this.view = view;
        this.validator = new Validator(view.getContext());
    }


    @Override
    public void createAccount(String name, String email, String password) {
        boolean hasInputDataErrors = hasInputDataErrors(name, email, password);
        if (!hasInputDataErrors) {
            CreateAccountTask task = new CreateAccountTask(ServiceFactory.getUserService(), this);
            task.execute(new User(name, email, password));
        }
    }

    private boolean hasInputDataErrors(String name, String email, String password) {
        boolean error = false;

        if (!validator.isUserNameValid(name)) {
            this.view.setNameError();
            error = true;
        }

        if (!validator.isEmailValid(email)) {
            this.view.setEmailError();
            error = true;
        }

        if (!validator.isPasswordValid(password)) {
            this.view.setPasswordError();
            error = true;
        }

        return error;
    }

    @Override
    public void initTask() {
        view.showProgress();
    }

    @Override
    public void finishTask() {
        view.hideProgress();
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
