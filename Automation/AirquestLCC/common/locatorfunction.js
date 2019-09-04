
function locatorFunction() {

    //**************************************************************************************************
    this.fnSelectOptionbyVisibleText = function selectOption(selector, item){
        var selectList, desiredOption;
    
        selectList = selector;
        selectList.click();
    
        selectList.all(protractor.By.tagName('option'))
            .then(function findMatchingOption(options){
                options.some(function(option){
                    option.getText().then(function doesOptionMatch(text){
                        if (item === text){
                            desiredOption = option;
                            return true;
                        }
                    });
                });
            })
            .then(function clickOption(){
                if (desiredOption){
                    desiredOption.click();
                }
            });
    };
    
    //**************************************************************************************************
    this.fnSelectDropdownbyNum = function selectoptionindex ( element, optionNum ) {
      if (optionNum){
        var options = element.all(by.tagName('option'))   
          .then(function(options){
            options[optionNum].click();
          });
      }
    };
} 


module.exports = new locatorFunction();