/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/bold
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import SelectWordEditing from './select-word/select-word-editing';
import SelectWordUi from './select-word/select-word-ui';

/**
 * The bold feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/bold/boldediting~SelectWordEditing bold editing feature}
 * and {@link module:basic-styles/bold/boldui~SelectWordUi bold UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class SelectWord extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ SelectWordEditing, SelectWordUi ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'SelectWord';
	}
}
