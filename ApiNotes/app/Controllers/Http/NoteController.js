'use strict'

const Note = use('App/Models/Note')

class NoteController {
    async index({ response }) {
        let notes = await Note.all()

        return response.json(notes)
    }

    async show({ params, response }) {
        const note = await Note.find(params.id)

        return response.json(note)
    }

    async store({ request, response }) {
        const noteInfo = request.only(['title', 'body'])

        const note = new Note()
        note.title = noteInfo.title
        note.body = noteInfo.body

        await note.save()

        return response.status(201).json(note)
    }

    async update({ params, request, response }) {
        const noteInfo = request.only(['title', 'body'])

        const note = await Note.find(params.id)
        if (!note) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        note.title = noteInfo.title
        note.body = noteInfo.body

        await note.save()

        return response.status(200).json(note)
    }

    async delete({ params, response }) {
        const note = await Note.find(params.id)
        if (!note) {
            return response.status(404).json({ data: 'Resource not found' })
        }
        await note.delete()

        return response.status(204).json(null)
    }
}

module.exports = NoteController
