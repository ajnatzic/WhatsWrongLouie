/**
 *  Tyler Hay, Dillon Viilo, AJ Natzic
 *  GVSU Senior Project - Winter 2020
 *  9/22/2020
 * 
 *  This class represents the Athlete(s) used throughout the app. 
 *  Users can create their own Athletes by selecting different preferences in
 *  the Athlete creation menu. 
 *  
 *  Athletes can vary by Name, Gender, Race, Skin Color, Clothing Colors, and Existing Injuries.
 *  When an athlete is created it can be stored in a roster linked to the user's account. 
 * 
 */
 

    //Variables that make up an Athlete
    var name;
    var gender;
    var race; 
    var skincolor;
    var shirtcolor;
    var pantcolor;
    var priorinjury; // TODO: Create list of injuries

    genderList = new Array("Male", "Female");

    //Array containing color values for clothes, Skin, and Race.
    //Color arrays are in HEX values.
    clothescolor = new Array(
        "#FF000",    //Red
        "#FFA500",   //Orange
        "#FFFF00",   //Yellow
        "#008000",   //Green
        "#0000FF",   //Blue
        "#800080",   //Purple
        "#000000",   //Black
        "#FFFFFF",   //White
        "#FFC0CB" ); //Pink

    // Races based off https://grants.nih.gov/grants/guide/notice-files/not-od-15-089.html
    raceList = new Array(
        "Native American",
        "Asian",
        "Black",
        "Hispanic",
        "Pacific Islander",
        "White");

    // Skin colors currently based off https://www.schemecolor.com/real-skin-tones-color-palette.php
    skincolorList = new Array(
        "#FFDBAC",  //Navajo White
        "#F1C27D",  //Apricot
        "#E0AC69",  //Fawn
        "#C68642",  //Peru
        "#8D5524"); //Russet

    /** 
     *  Default Constructor
     *  Creates an Athlete that represents GVSU's Louie the Laker Mascot
     */
    function Athlete(){

        this.name = "Louie";
        this.gender = genderList[0];
        this.race = raceList[5];
        this.skincolor = skincolorList[0];
        this.shirtcolor = clothescolor[4];
        this.pantcolor = clothescolor[7];
        this.priorinjury = 200001; 

    }

    /**
     *  User input Constructor 
     *  Creates an Athlete based on User Input from the Athlete Creation Menu
     */
    function Athlete(name, gender, race, skincolor, shirtcolor, pantcolor, priorinjury){

        this.name = name;
        this.gender = genderList[gender];
        this.race = raceList[race]; 
        this.skincolor = skincolorList[skincolor];
        this.shirtcolor = clothescolor[shirtcolor];
        this.pantcolor = clothescolor[pantcolor];
        this.priorinjury = priorinjury;
    }

    // Getters for Athlete Variables
    function getname(){
        return this.name;
    }

    function getgender(){
        return this.gender;
    }

    function getrace(){
        return this.race;
    }

    function getskcolor(){
        return this.skincolor;
    }

    function getshirtColor(){
        return this.shirtcolor;
    }

    function getpantcolor(){
        return this.pantcolor;
    }

    function getpriorinjury(){
        return this.priorinjury;
    }

    // Setters for Athlete Variables
    function setname(x){
        this.name = x;
    }

    function setgender(x){
        this.gender = x;
    }

    function setrace(x){
        this.race = x;
    }

    function setskcolor(x){
        this.skincolor = x;
    }

    function setshirtColor(x){
        this.shirtcolor = x;
    }

    function setpantcolor(x){
        this.pantcolor = x;
    }

    function setpriorinjury(x){
        this.agender = x;
    }