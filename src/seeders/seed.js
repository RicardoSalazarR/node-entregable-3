const db = require('../utils/database')
const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");


const users = [
    { firstName: 'Ricardo', lastName: 'Salazar', password: '1234',email:'axel.111yo@gmail.com' },
    { firstName: 'Axel', lastName: 'Reyes', password: '1234',email:'axel2.111yo@gmail.com' },
]
const courses = [
    { title: 'ReactJs', description: 'En este curso se enseña a usar reactJs', instructor: 'Andres' },
    { title: 'NodeJs', description: 'En este curso se enseña backend con node', instructor: 'Ivan' },
    { title: 'Fundamentos', description: 'En este curso se enseñan las bases del desarrollo web', instructor: 'Brenda' }
]

const userCourses = [
    { userId: 1, courseId: 1 },
    { userId: 1, courseId: 2 },
    { userId: 2, courseId: 1 },
    { userId: 2, courseId: 3 },
];

const categories = [
    {name:'Backend',  courseId:2},
    {name:'Frontend',  courseId:1},
    {name:'Desarrollo web',  courseId:3}
]

const videos = [
    {title:'Video react 1',url:'https://www.youtube.com/watch?v=6Jfk8ic3KVk',courseId:1},
    {title:'Video node 1',url:'https://www.youtube.com/watch?v=BhvLIzVL8_o',courseId:2}
]

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando el sembrado malicioso");
        users.forEach((user) => Users.create(user))

        setTimeout(() => {
            courses.forEach(course => Courses.create(course))
        }, 100)
        setTimeout(() => {
            userCourses.forEach(userCourse => UserCourses.create(userCourse))
        }, 250)
        setTimeout(() => {
            categories.forEach(categorie => Categories.create(categorie))
        }, 450)
        setTimeout(() => {
            videos.forEach(video => Videos.create(video))
        }, 550)
    })
    .catch(error => console.log(error))
