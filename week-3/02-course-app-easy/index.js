const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const authentication = (req, res, next) => {
  const { username , password } = req.headers;
  const admin = ADMINS.find(a => a.username === username && a.password === password );
  if (admin){
    next();
  }else{
    res.status(403).json({message : 'Admin Authentication failed :('});
  }
}

// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
  const admin = req.body;
  const existingAdmin = ADMINS.find(a => a.username === admin.username);
  if (existingAdmin){
    res.status(403).json({message : "Admin already exists."});
  }else{
    ADMINS.push(admin);
    res.json({message : "Admin created successfully."})
  }
});

app.post('/admin/login',authentication, (req, res) => {
  // logic to log in admin
  res.json({message : 'Logged in successfully'})
});

app.post('/admin/courses',authentication, (req, res) => {
  // logic to create a course
  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({message : 'Course created successfully', courseId: course.id});
});

app.put('/admin/courses/:courseId',authentication, (req, res) => {
  // logic to edit a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId);
  if(course) {
    Object.assign(course, req.body);
    res.json({message: 'Course updated successfully'});
  }else {
    res.status(404).json({message: 'Course not found'});
  }
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
  res.json({course: COURSES});
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
  const user = {
    username: req.body.username,
    password: req.body.password,
    purchasedCourses: []
  }
  USERS.push(user);
  res.json({message: 'Use created successfully'})
});

app.post('/users/login', authentication, (req, res) => {
  // logic to log in user
  res.json({message: 'Logged in successfully '});
});

app.get('/users/courses', authentication, (req, res) => {
  // logic to list all courses
  let filteredCourses = [];
  for (let i=0; i<COURSES.length; i++){
    if(COURSES[i].published) {
      filteredCourses.push(COURSES[i])
    }
  }

  res.json({ courses: filteredCourses });
});

app.post('/users/courses/:courseId',authentication, (req, res) => {
  // logic to purchase a course
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c => c/id === courseId && c.published);
  if(course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: 'Course purchased successfully' });
  }else {
    res.status(404).json({ message: 'Course not found or not available '});
  }
});

app.get('/users/purchasedCourses', authentication, (req, res) => {
  // logic to view purchased courses
  var purchasedCourseIds = req.user.purchasedCourses; [1, 4];
  var purchasedCourses = [];
  for (let i=0; i<COURSES.length; i++) {
    if(purchasedCourseIds.IndexOf(COURSES[i].id) != -1) {
      purchasedCourses.push(COURSES[i]);
    }
  }
  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
