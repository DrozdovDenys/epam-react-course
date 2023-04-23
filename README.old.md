
<h1 align="center">«Epam React Course»</h1>

<div align="center"><img src="/src/images/readme.jpg"/></div>

<h2>Descripion</h2>
Create react app with the following functionality:

1. Courses component should be rendered in App component.
2. Courses component should include:
  + SearchBar component (you will create it in the next step).
  + CourseCard component.
  + Add new course button. (Reuse Button component).
3. SearchBar should be in Courses component.
4. SearchBar component should include:
  + Input component.
  + Button component.
5. SearchBar component should include:
  + User should have ability to search course by title and id.
  + The search is performed by the occurrence of characters in the string, and not just by a match at the
    beginning of the string.
  + Case-insensitive search.
  + When user clicks on Search button it displays all courses that match the search query.
  + All courses are displayed when user cleans search field.
6. CreateCourse component should contain the following elements:
  + Title (input) - field for input course name.
  + Description (textarea) - text length should be at least 2 characters.
  + Authors - contains a list of all authors and their corresponding Add author buttons.
  + Course authors - contains a list of authors course and their corresponding Delete author buttons.
  + Delete author - when user clicks on this button the corresponding author disappears from the Course
    authors list and shows in Authors.
  + Add author - when user clicks on this button the corresponding author disappears from the Authors
    list and shows in Course authors.
  + Author field (input) - author name length should be at least 2 characters.
7. Create author (button) - when user clicks on this button:
  + the new author appears in Authors;
  + the new author adds to array with all authors;
  + the author's id generates automatically;
  + new author info should be presented as an object (see model of Author below);
  + for the current task new author should be added to mockedAuthorsList.
8. Duration - this part provides logic for adding course duration time.
  + the duration of the course is entered in minutes;
  + for the correct display of the course duration, you need to format minutes into hours and
    minutes;
  + duration should be more than 0 minute;
  + user should have an ability to enter ONLY numbers into the field.
 9.Create course (button) - when user clicks on this button:
  + CreateCourse component closes;
  + Courses component displays;
  + list of courses displays with the new course.
 
  



<h2>Technologies</h2>

+ React
+ Redux Toolkit
+ React Router DOM 
+ Adaptive

<h3 align="center"><a href="#">SEE LIVE</a></h3>
