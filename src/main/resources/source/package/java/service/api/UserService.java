package #PACKAGE_NAME#.service.api;

import #PACKAGE_NAME#.dto.User;
import #PACKAGE_NAME#.error.service.ServiceException;
import #PACKAGE_NAME#.infrastructure.Database;

/**
 * Created by Juan Manuel Romera on 16/5/2016.
 * Service to establish the communication with
 * the user service in the server
 */
public abstract class UserService implements Service {

    protected Database database;

    protected UserService(Database database) {
        this.database = database;
    }

    /**
     * Create an user in the system
     * Returns the user's id.
     *
     * @param user {@link User}
     * @return user's id {@link String}
     */
    public abstract void createUser(User user) throws ServiceException;

    public abstract boolean isUserLogged() throws ServiceException;

    public abstract void loginUser(String email, String password) throws ServiceException;

    public abstract User getLoggedUser();

    public ServiceType getType() {
        return ServiceType.USER;
    }

    public abstract void logout();
}
