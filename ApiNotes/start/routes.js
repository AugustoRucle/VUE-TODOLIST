'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('note', 'NoteController.store')
  Route.get('note', 'NoteController.index')
  Route.get('note/:id', 'NoteController.show')
  Route.put('note/:id', 'NoteController.update')
  Route.delete('note/:id', 'NoteController.delete')
}).prefix('api/v1');
