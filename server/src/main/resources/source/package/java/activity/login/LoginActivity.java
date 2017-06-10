package #PACKAGE_NAME#.activity.login;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import #PACKAGE_NAME#.R;
import #PACKAGE_NAME#.activity.home.HomeActivity;
import #PACKAGE_NAME#.activity.register.CreateAccountActivity;

import butterknife.BindView;
import butterknife.ButterKnife;

public class LoginActivity extends AppCompatActivity implements LoginView {

    private static final int REQUEST_SIGN_UP = 0;

    @BindView(R.id.input_email)
    EditText _emailText;
    @BindView(R.id.input_password)
    EditText _passwordText;
    @BindView(R.id.btn_login)
    Button _loginButton;
    @BindView(R.id.btn_signup)
    TextView _signUpButton;

    private ProgressDialog progressDialog;
    private LoginController controller;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        ButterKnife.bind(this);

        controller = new LoginControllerImpl(this);

        _loginButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                login();
            }
        });
        _signUpButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                signUp();
            }
        });
    }

    private void login() {
        String email = _emailText.getText().toString();
        String password = _passwordText.getText().toString();
        controller.loginUser(email.trim(), password.trim());
    }

    private void signUp() {
        Intent intent = new Intent(LoginActivity.this, CreateAccountActivity.class);
        startActivityForResult(intent, REQUEST_SIGN_UP);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        if (requestCode == REQUEST_SIGN_UP) {
            if (resultCode == RESULT_OK) {
                this.finish();
            }
        }
    }

    @Override
    public void onBackPressed() {
        moveTaskToBack(true);
    }

    @Override
    public void setEmailError(String error) {
        this._emailText.setError(error);
    }

    @Override
    public void setPasswordError(String error) {
        this._passwordText.setError(error);
    }


    @Override
    public void onError(String errorMsg) {
        Toast.makeText(getBaseContext(), errorMsg, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void showProgress() {
        progressDialog = ProgressDialog.show(LoginActivity.this, "", getResources().getString(R.string.action_login_message), true, false);
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
        Intent intent = new Intent(LoginActivity.this, HomeActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(intent);
    }

    @Override
    public Context getContext() {
        return this;
    }
}
