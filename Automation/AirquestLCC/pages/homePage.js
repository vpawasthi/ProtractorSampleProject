
function homepage() {

    // properties and methods of login and homepage

    // Locators of Login Page
    
    this.sUser = element(by.css('input[formcontrolname="email"]'));

    this.sPassword = element(by.css('input[formcontrolname="password"]'));

    this.btnLogin = element(by.xpath('//span[text()="Log in"]'));    //text()[.='Log in']/ancestor::span[1]	

    //this.menuitemLogout = element(by.xpath('/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/button[5]')); 

    this.menuitemLogout = element(by.xpath('//mat-icon[text()="power_settings_new"]'));

    this.menuItemsVerticalOpener = element(by.xpath('//mat-icon[text()="more_vert"]'));
   
    // Locators of Home Page
    this.labelSubAccountRole = element(by.className('color-neon-green ng-star-inserted'));

    this.linkProfileName   = element(by.css('span[class="text-primary title margin-5"]')); 

    //power_settings_new

    // this.mtdLogout = function() {
    //     this.menuItemsVerticalOpener.click();
    //     this.menuitemLogout.click();
 
    //   };

    this.mtdSetUser = function (sUserEmail ) {

        this.sUser.sendKeys(sUserEmail); 

     };

     this.mtdSetPwd = function (sPassword ) {

        this.sPassword.sendKeys(sPassword); 
     };

   
    }

module.exports = new homepage(); 





