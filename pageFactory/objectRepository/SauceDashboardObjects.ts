import { BaseObjects } from './BaseObjects'

export class SauceDashboardObjects extends BaseObjects {
    USERNAME_EDITBOX_ID = '#user-name';

    PASSWORD_EDITBOX_ID = '#password';

    LOGIN_BUTTON_ID = '#login-button';

    PAGETITLE_XPATH = '//span[@class=\'page-title\' and contains(text(),\'Orders\')]';
}
