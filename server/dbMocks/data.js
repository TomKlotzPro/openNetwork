const moment = require('moment');
const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/product');
const Category = require('../models/category');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const product1Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();

module.exports = {
  users: {
    model: User,
    items: [
      {
        _id: user1Id,
        avatar:
          'https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg',
        email: 'ulrichp@gmail.com',
        name: 'Ulrich Ekeu',
        info: 'Bla bla bla bla',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: 'Rhonyn99',
        password: 'testtest',
        role: 'admin',
        products: [product1Id],
      },
      {
        _id: user2Id,
        avatar:
          'https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png',
        email: 'peter@gmail.com',
        name: 'Peter Green',
        info: 'Bla bla bla bla',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: 'Petergreen',
        password: 'testtest1',
      },
      {
        _id: user3Id,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU',
        email: 'kevin@gmail.com',
        name: 'Kevin Rock',
        info: 'I have a famous name',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: 'Kevin21',
        password: 'testtest2',
      },
    ],
  },
  categories: {
    model: Category,
    items: [
      {
        _id: category1Id,
        name: 'Web Development',
      },
      {
        _id: category2Id,
        name: 'Mobile Development',
      },
    ],
  },
  products: {
    model: Product,
    items: [
      {
        _id: product1Id,
        slug: 'Dart-and-Flutter API',
        title: 'Dart and Flutter API',
        subtitle: 'Build real mobile Application for Android and iOS.',
        image: 'https://miro.medium.com/max/1838/1*PblQquEXxZ6U1BmBNlEprA.jpeg',
        description: 'Just Fun',
        wsl: [
          {
            value: 'Just Work',
          },
          {
            value: 'Just Work',
          },
          {
            value: 'Just Work',
          },
          {
            value: 'Just Work',
          },
        ],
        requirements: [
          {
            value: 'Just Work',
          },
          {
            value: 'Just Work',
          },
        ],
        status: 'published',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        category: category2Id,
        author: user1Id,
      },
    ],
  },
};
