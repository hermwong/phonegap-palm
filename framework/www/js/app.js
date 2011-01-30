App = new Object();


/**********************************************************************/
/**********************************************************************/
/** BOOTSTRAP                                                        **/
/**********************************************************************/
/**********************************************************************/


/**
 * Bootstrap the framework, App and everything else
 */
document.addEventListener("deviceready", function() {
  App.jQT = new $.jQTouch({
    icon: 'img/chapeau_48.png',
    //useFastTouch: false,
    //useAnimations: false,
  });
}, false);

