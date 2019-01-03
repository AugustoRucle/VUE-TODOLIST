'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoteSchema extends Schema {
  up () {
    this.create('notes', (table) => {
      table.increments()
      table.string('title').nullable()
      table.string('body').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('notes')
  }
}

module.exports = NoteSchema
