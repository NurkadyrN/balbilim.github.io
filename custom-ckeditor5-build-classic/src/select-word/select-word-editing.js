/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/bold/boldediting
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const SelectWord = 'SelectWord';

/**
 * The bold editing feature.
 *
 * It registers the `'bold'` command and introduces the `bold` attribute in the model which renders to the view
 * as a `<inputword>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SelectWordEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'SelectWordEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Allow SelectWord attribute on text nodes.
		editor.model.schema.extend( '$text', { allowAttributes: SelectWord } );
		editor.model.schema.setAttributeProperties( SelectWord, {
			isFormatting: true,
			copyOnEnter: true
		} );

		// Build converter from model to view for data and editing pipelines.
		editor.conversion.attributeToElement( {
			model: SelectWord,
			view: {
				name:'span',
				classes:'input-word'
			}
		} );

		// Create SelectWord command.
		editor.commands.add( SelectWord, new AttributeCommand( editor, SelectWord ) );

		// Set the Ctrl+B keystroke.
		editor.keystrokes.set( 'CTRL+M', SelectWord );
	}
}
