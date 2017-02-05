// ================================
// Created by Eka Setya Nugraha.
// Copyright 01/21/2017.
// ================================
import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class ItemStore extends EventEmitter {
	constructor() {
		super()
		this.state = {
			// All items
			items: [],
			// Individual item (for edit and delete)
			item: {},
			activity: "",
			loading: false
		}
	}
	getState() {
		return this.state;
	}
	handleActions(action) {
		switch(action.type) {
			case "xhr_start": {
				this.state.loading = true;
				this.emit("change");
				break;
			}
			case "get_items": {
				this.state.items = action.data;
				this.state.loading = false;
				this.emit("change");
				break;
			}
			case "prep_insert_item": {
				this.state.item = {};
				this.state.activity = "insert";
				this.emit("change_item");
				break;
			}
			case "prep_edit_item": {
				this.state.item = action.data;
				this.state.activity = "edit";
				this.emit("change_item");
				break;
			}
			case "prep_delete_item": {
				this.state.item = action.data;
				this.state.activity = "delete";
				this.emit("change_item");
				break;
			}
		}
	}
}

const itemStore = new ItemStore;
dispatcher.register(itemStore.handleActions.bind(itemStore));
window.dispatcher = dispatcher;

export default itemStore;
