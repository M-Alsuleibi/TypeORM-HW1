import express from 'express';
import { initDB } from './entities/dataSource.js'
import { User } from './entities/User.js';
var app = express();

const PORT = 3000;

app.use(express.json());


app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create a new user
    const user = new User();
    user.username = username;
    user.password = password;

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  initDB()
});

