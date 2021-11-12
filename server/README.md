
#  Image Processing Api


## Description
In this repository i showing up my new learned skill through [Udacity](https://www.udacity.com/).
Image Processing Api consist on creating a simple API that handle files images which are storage on the filesystem,
while users are able to read the file through the URL,  resize  and storage to filesystem.

It's the first project in order to achieved the JavaScript Full Stack nano degree, I have a bunch of [requirements](https://review.udacity.com/#!/rubrics/3005/view), that i should accomplish before submitting it. 



## Getting Started

### Dependencies
make sure to have already installed the followings programs on your computer Nodejs up version +14 and NPM. 


### Executing program

```css
1- clone the repository.

git clone https://github.com/AlejandroBryan/image-processing-api.git

2- install all dependencies  and devdependencies.

npm install 

3- run the application. 

npm run dev

the server will run on localhost:3001


```
**in order to keep code well organized and avoid bugs run sequently**
```
npm run lint 
npm run format

```


## consuming the Api
* once everything is running correctly
  open a browser of your choice
 ```
 localhost:3001
 ```
  you will get a welcome message and a introduction how to consume
  

 * avoid
 ```
 localhost:3001/api
 localhost:3001/api/images
 
 ```
* be straight
```
find the file
 localhost:3001/api/images?file=rocky-mountain.jpg

resize the file
 localhost:3001/api/images?file=rocky-mountain.jpg&width=600&height=600

```
**note**
rocky-mountain.jpg is already storage on the filesystem.
If you wanna try with a different one, feel you free to add an image manually or upload through Postman

## Authors

* [Alejandro Bryan](https://www.alejandrobryan.com/)

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

## Acknowledgments

Reference, code, documentation, etc.
* [sharp](https://sharp.pixelplumbing.com/)
* [typeScript](https://www.typescriptlang.org/)
* [nodejs](https://nodejs.org/en/)
* [jasmine](https://jasmine.github.io/)
* [eslint](https://eslint.org/)
* [prettier](https://prettier.io/)



