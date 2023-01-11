/* //import and execute the following modules
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
const { INET } = require('sequelize');
let server = require("../app");

var expect = chai.expect;//import the expected library
var should = chai.should();//import the should library
chai.use(chaiHttp); */

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require("../app");

var expect = chai.expect;
var should = chai.should();
chai.use(chaiHttp);



//get route
describe('Characters route', () => {
  it('should return a list of characters', (done) => {
    chai.request(server)
      .get('/characters')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Links route', () => {
  it('should return a list of links', (done) => {
    chai.request(server)
      .get('/link')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Demons route', () => {
  it('should return a list of demons', (done) => {
    chai.request(server)
      .get('/demon')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Giants route', () => {
  it('should return a list of giants', (done) => {
    chai.request(server)
      .get('/giant')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Gods route', () => {
  it('should return a list of gods', (done) => {
    chai.request(server)
      .get('/gods')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Monsters route', () => {
  it('should return a list of monsters', (done) => {
    chai.request(server)
      .get('/monsters')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Mortals route', () => {
  it('should return a list of mortals', (done) => {
    chai.request(server)
      .get('/mortals')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('Primordials route', () => {
  it('should return a list of primordials', (done) => {
    chai.request(server)
      .get('/primordials')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});

//test for non existant route
describe('Non-existent route', () => {
    it('should return a 404 status', (done) => {
      chai.request(server)
        .get('/non-existent-route')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  
//get by id tests

describe('Characters route id', () => {
    it('should return a character with the specified ID', (done) => {
      chai.request(server)
        .get('/characters/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Links route id', () => {
    it('should return a link with the specified ID', (done) => {
      chai.request(server)
        .get('/link/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Demons route id', () => {
    it('should return a demon with the specified ID', (done) => {
      chai.request(server)
        .get('/demon/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Giants route id', () => {
    it('should return a giant with the specified ID', (done) => {
      chai.request(server)
        .get('/giant/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Gods route id', () => {
    it('should return a god with the specified ID', (done) => {
      chai.request(server)
        .get('/gods/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Monsters route id', () => {
    it('should return a monster with the specified ID', (done) => {
      chai.request(server)
        .get('/monsters/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Mortals route', () => {
    it('should return a mortal with the specified ID', (done) => {
      chai.request(server)
        .get('/mortals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
  describe('Primordials route id', () => {
    it('should return a primordial with the specified ID', (done) => {
      chai.request(server)
        .get('/primordials/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.id.should.equal(1);
          done();
        });
    });
  });
  
//create for character

describe('/POST create a new character', () => {
  it('it should POST a new character', (done) => {
      const character = {
          id: 1000,
          first_name: 'Jane',
          surname: 'Doe',
          gender: 'Female',
          age: 25,
          deaths: 0,
          character_type: 'Mortal',
          link_id: 1000,
          auth_notes: 'none',
          comments: 'none'
      };
      chai.request(router)
          .post('/create')
          .send(character)
          .end((err, res) => {
            console.log(res,err)
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.have.property('first_name').eql(character.first_name);
              res.body.should.have.property('surname').eql(character.surname);
              res.body.should.have.property('gender').eql(character.gender);
              res.body.should.have.property('age').eql(character.age);
              res.body.should.have.property('deaths').eql(character.deaths);
              res.body.should.have.property('character_type').eql(character.character_type);
              res.body.should.have.property('link_id').eql(character.link_id);
              res.body.should.have.property('auth_notes').eql(character.auth_notes);
              res.body.should.have.property('comments').eql(character.comments);
              done();
          });
  });
  it('it should return an error if essential fields are missing', (done) => {
      const character = {
          id: 1000,
          first_name: 'Jane',
          surname: 'Doe',
          gender: 'Female',
          age: 25,
          deaths: 0,
          character_type: 'Mortal',
          link_id: 1000,
          auth_notes: 'none',
          comments: 'none'
      };
      chai.request(router)
          .post('/create')
          .send(character)
          .end((err, res) => {
              res.should.have.status(400);
              res.body.should.be.a('object');
              res.body.should.have.property('error').eql('Essential fields missing');
              done();
          });
  });
});


//update for character

it('it should UPDATE a character', (done) => {
  chai.request(server)
      .put('/characters/:id')
      .send({
          id: 1000,
          first_name: 'Jane',
          surname: 'Doe',
          gender: 'Female',
          age: 30,
          deaths: 3,
          character_type: 'Mortal',
          link_id: 1000,
          auth_notes: 'updated',
          comments: 'updated'
      })
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('first_name').eql('Jane');
          res.body.should.have.property('surname').eql('Doe');
          res.body.should.have.property('gender').eql('Female');
          res.body.should.have.property('age').eql(30);
          res.body.should.have.property('deaths').eql(3);
          res.body.should.have.property('character_type').eql('Mortal');
          res.body.should.have.property('link_id').eql(1000);
          res.body.should.have.property('auth_notes').eql('updated');
          res.body.should.have.property('comments').eql('updated');
          done();
      });
});


//delete for character

it('it should DELETE a character', (done) => {
  chai.request(server)
      .delete('/characters')
      .send({
          id: 1000
      })
      .end((err, res) => {
          res.should.have.status(200);
          res.text.should.eql('Character deleted');
          done();
      });
});

