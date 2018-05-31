/*
* ITEM SERVER CONTROLLER
*/

import mongoose from 'mongoose';
import * as ItemService from '../services/item.service';
import { author } from '../config/server.config';

export const getItems = (req, res) => {
    ItemService.getItems(req.query.q || req.query.search).then(function(result){
        return res.json({ 'success': true, 'author': author , 'categories': result.categories,'items': result.items });
    }).catch(function(result){
        return res.json({ 'success': false, 'message': 'Some Error', 'error': result });
    });
};

export const getItem = (req, res) => {
    ItemService.getItemInfo(req.params.id).then(function(item) {
        return res.json({ 'success': true, 'author': author, 'item': item});
    }).catch(function(result) {
        return res.json({ 'success': false, 'errorMessage': 'Ups!' });
    });
};