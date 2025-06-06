import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('john123', 10),
    isAdmin: false
  },
  {
    name: 'Alice Smith',
    email: 'alice@email.com',
    password: bcrypt.hashSync('alice123', 10),
    isAdmin: false
  }
];

export default users;
