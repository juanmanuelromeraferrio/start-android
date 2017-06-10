package #PACKAGE_NAME#.activity.register;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import #PACKAGE_NAME#.R;
import #PACKAGE_NAME#.activity.home.HomeActivity;
import #PACKAGE_NAME#.util.Validator;

import butterknife.BindView;
import butterknife.ButterKnife;

public class CreateAccountActivity extends AppCompatActivity implements CreateAccountView {

    @BindView(R.id.input_name)
    EditText _nameText;
    @BindView(R.id.input_email)
    EditText _emailText;
    @BindView(R.id.input_password)
    EditText _passwordText;
    @BindView(R.id.btn_signup)
    Button _signupButton;
    @BindView(R.id.toolbar)
    Toolbar toolbar;

    private ProgressDialog progressDialog;
    private CreateAccountController controller;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_account);
        ButterKnife.bind(this);

        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle(getResources().getString(R.string.create_account_title));

        controller = new CreateAccountControllerImpl(this);

        _signupButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                signUp();
            }
        });
    }

    public void signUp() {

        String name = _nameText.getText().toString();
        String email = _emailText.getText().toString();
        String password = _passwordText.getText().toString();

        clearErrors();
        controller.createAccount(name.trim(), email.trim(), password.trim());
    }

    private void clearErrors() {
        this._nameText.setError(null);
        this._emailText.setError(null);
        this._passwordText.setError(null);
    }

    @Override
    public void setNameError() {
        this._nameText.setError(getBaseContext().getResources().getString(R.string.error_user_name, Validator.MIN_LENGTH_USER_NAME));
    }

    @Override
    public void setEmailError() {
        this._emailText.setError(getBaseContext().getResources().getString(R.string.error_invalid_email));
    }

    @Override
    public void setPasswordError() {
        this._passwordText.setError(getBaseContext().getResources().getString(R.string.error_password, Validator.MIN_LENGTH_PASSWORD, Validator.MAX_LENGTH_PASSWORD));
    }

    @Override
    public void onError(String errorMsg) {
        Toast.makeText(getBaseContext(), errorMsg, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void showProgress() {
        progressDialog = ProgressDialog.show(CreateAccountActivity.this, "", getResources().getString(R.string.creating_account), true, false);
        progressDialog.show();
    }

    @Override
    public void hideProgress() {
        if (progressDialog.isShowing()) {
            progressDialog.dismiss();
        }
    }

    @Override
    public void goToNext() {
        Intent intent = new Intent(CreateAccountActivity.this, HomeActivity.class);
        startActivity(intent);
    }

    @Override
    public Context getContext() {
        return this;
    }
}
