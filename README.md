___
# **Quizical**


Quizical is the perfect place to test your Harry Potter knowledge. If it's just a case of testing your knowledge trying questions or if you want to put your knowledge to the test and try to answer as many questions right in 1 minute. Most quizzes will give you a certain amount of questions and give you a score out of the number of questions, whereas this quiz will give you the opportunity to try and get the highscore and see if your friends can beat your score. The quiz is for all ages and all knowledge levels. The questions range from easy to hard, so you should be able to really test how much you know. 

___
## **Motivation** ##
I am a Harry Potter fan and I would love to see how much I really know. This website would have given me that opportunity to test my knowledge. I would like a quiz game which you could play with your friends. So in my head I thought a quiz which you could pass around and see who could get the best score sounded perfect. 
___
## **Features** ##
___
### **Opening Screen** ###
The opening page has the website name at the very top of the page so that it stands out the most. This will stay there on the site throughout. The intro line gives the user an instant insite as to what the quiz is about.

![screenshot of website heading/logo with the brief insite to what the quiz is about](assets/images/heading-ss.png)

The opening page is set so that it looks like the portal to a game. The circle in the middle with the starry background with the start button positioned in the middle is to make the user make it feel like they are entering a magical world.

- start button will change colour when hovered over so that the user knows that it is interactable. 
- curser will also change shape to a pointer to indicate that it is interactable too.

![screenshot of start button on opening screen](assets/images/enter-quiz-ss.png)

The background looks like the mauraders map in Harry Potter 
- help the user identify what the quiz is about.

### **Modal** ###
The modal provides the user with the different game buttons. Depending on what game they chose to play the corresponding game will load. Modal also give the user an explanation as to what each quiz does. User can also input a desired playing name here too.

![screen shot of Modal](assets/images/modal-ss.png)

- buttons will turn yellow and curser will change to a pointer. This will show the user that the buttons are clickable.
- modal will display in the centre and will cause the behind background to change transparancy so that the users attention will be drawn to the modal.
- text input area gives the oppotunity to pick a desired name for them to play as. Harry Potter is put in there by default in case the user forgets to put a name.
- if user puts nothing in the input then a name will be saved for them (player 1), this will stop any delay to the game in case the user just wants to play the quiz and not bothered about saving a name, this javascipt will make it userfriendly for both types of users who want to play.
- username has a limit to the amount of characters to make the leaderboard display more user friendly as it will fit the given container.
- information is given to the user at this point so that they decide what game type they would like to play, rather than trying to figure out what each one does.

![screen shot of buttons turning yellow](assets/images/button-ss.png)

### **Questions and Answers** ###

Once the gametype the user wants to play has been selected the quiz questions will appear. The questions are displayed on top so the user will read that first then the answer options are displayed below in the same format as all previous buttons so that the user "knows the drill".

- normal gametype will display just the questions and answers

![screen shot of normal gametype](assets/images/questions-ss.png)

- timed game displays a timer above the questions so that the user knows how long they have.

![screen shot of timed gametype](assets/images/timed-ss.png)

### **end game** ###

At the end of the quiz, the users score for that game will be displayed, along with a leaderboard. The leaderboard has space for 5 scores. If the user beats the scores that are already there, then the lowest will be taken off. 

- the chosen name for the user and their score is displayed at the top right. If the user doesn't beat the highscore, they can still see how they have done. 
- try again button is displayed so that the user gets the chance to try again or pass the quiz to their friend to see if they can beat their score.

![screen shot top of results page with try again and recent score](assets/images/recent-score-ss.png)

- a clear score button is provided so if the user wants to clear all previous highscores they can and start adding new scores to the table.

![screen shot top of results page with try again and recent score](assets/images/highscores-ss.png)
___

### **Images** ###

The images used in the quiz have been Harry Potter or magic related. I got my images from - [pexels.com](https://www.pexels.com/)
___

## **Features For Future** ##
___
- a larger leaderboard which will display scores from online so that you can try and beat people from all over the world.
- a live 2 player game where you can play at the same time and see who can get a better score whilst seeing what your opponant is on.
- a choice of quiz topics.
- video clips from the movie where users can answer questions like 'what does Harry say next?'

## **Testing** ##
___

I created media queries so that no matter the width size, with that being a phone size, latop size or even just minimised widths of a computer screen; the code will cause the website to be responsive so that all elements are responsive to that width or height. Most of my div contianers are in flex display, so they will be responsive to the screen size

### **Media Queries** ###

- the buttons width will change depending on the screen size. They need to be smaller as they would no longer fit in their container.
- the quiz container width was made bigger and setting it to 100% so that the quiz question could fit in the container no matter the screen size.
- the font size for the headers were reduced so that they didn't take more space than the rest of the content.

### **Validators** ###
- Validator passed for html w3c validator - no errors
- Validator passed for css official (jigsaw) validator - no errors
- Validator passed for javascript validater (jshint) - no errors 
(There are 30 functions in this file. Function with the largest signature take 2 arguments, while the median is 0. Largest function has 10 statements in it, while the median is 2. The most complex function has a cyclomatic complexity value of 3 while the median is 1.)
___

## **Bugs** ##

- buttons on mobile devices were not changin back to their initial background colour after being pressed on a mobile. I used [medium article](https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c) to help remove the hover effect when on a mobile device.
- button text colour was coming out blue instead of black on a mobile device. Changed the text colour for the class to black to fix.
- had a bug on the modal. I set an event listener to the game mode buttons to start the timer if the timed game button was selected. But I also had a required element on the input box and buttons were set to disable until a name was inserted. But the if they clicked the timed game button when it was disabled, it would still start the timer and not close the modal. So i set a default name for the input if a name wasn't selected and got rid of the disabled buttons.
- questions were displaying to fast for the correct and wrong answer css. The container would display red for incorrect and green for correct. But the question was changing to the next one before it would finish. So i set a animation function with a timedelay to the change question function to give it time to finish it's animation.

___

## **Deployment** ##

I deployed the website using GitHub. Steps taken:
1. Go on to the GitHub website.
2. Go on to the settings tab of the depository 
3. Select pages on the section tab.
4. Select the main branch.
5. Save.
6. Link to website is then provided.

Here is the link to [Quizical](https://josh-wickens.github.io/Quizical/)

When adding code, in the terminal commit all changes using 

1. git add .
2. git commit -m "insert change here"
3. git push to save it to github

___

## **Credits** ##
___

### **Code** ###

I used a couple of tutorials to help me with the basics of making a quiz. 

[Code Explained](https://www.codeexplained.dev/2018/10/create-multiple-choice-quiz-using-javascript.html)
[Brian Design - Youtube](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
[Web Dev Simplified - Youtube](https://www.youtube.com/watch?v=riDzcEQbX6k)
[code Explained](https://www.youtube.com/watch?v=49pYIMygIcU)
[Quizical](https://josh-wickens.github.io/Quizical/)

I used fisher-yates algorithm to shuffle the questions. I looked for a way which you could shuffle as if using a deck of cards. Found a few videos that explained the algorythim and deployed it to use to shuffle my questions into a random order

[All Things Javascript - Youtube](https://www.youtube.com/watch?v=myL4xmtAVtw)
[Quizical](https://josh-wickens.github.io/Quizical/)
[Quizical](https://josh-wickens.github.io/Quizical/)























 


