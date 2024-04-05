const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {

  try {
    res.status(200).json({
      endpoints: [
          { name: 'Home', url: '/home' },
          { name: 'Test', url: '/test' }
      ]
  });
  } catch (error) {
    res.status(500).send('Error');
    console.log(error);
  }
});
app.get('/api/home', async (req, res) => {
  try {
    const response = [
      "Node.js is built on Chrome's V8 JavaScript engine.",
      "Node.js uses an event-driven, non-blocking I/O model.",
      "Node.js is lightweight and efficient.",
      "React allows developers to create large web applications.",
      "React helps to update and render the right components when data changes.",
      "React is component-based, which enhances code reusability.",
      "Node.js has a rich library of various JavaScript modules.",
      "React allows developers to create isomorphic apps.",
      "Node.js applications never buffer; they simply output the data in chunks.",
      "React uses a virtual DOM which improves apps' performance."
    ];
    const randomIndex = Math.floor(Math.random() * response.length);
    console.log(response[randomIndex]);
    if (response) {
      res.status(200).send(response[randomIndex]);
    }

  } catch (error) {
    res.status(500).send('Error');
    console.log(error);
  }
});
let cnt = 0;
app.get('/api/test', async (req, res) => {

  try {
    cnt = cnt + 1
    res.status(200).json({ count: cnt });
  } catch (error) {
    res.status(500).send('Error');
    console.log(error);
  }
});

app.listen(3000, () => console.log(`App running on port 3000.`));