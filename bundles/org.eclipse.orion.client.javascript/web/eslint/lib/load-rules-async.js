/*******************************************************************************
 * @license
 * Copyright (c) 2013, 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *	 IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global define require*/
/**
 * Implements eslint's load-rules API for AMD. Our rules are loaded as AMD modules.
 */
define([
	"eslint/rules/eqeqeq",
	"eslint/rules/no-redeclare",
	"eslint/rules/no-undef",
	"eslint/rules/no-unused-vars",
	"eslint/rules/no-use-before-define",
	"eslint/rules/semi",
	"eslint/rules/no-extra-semi",
	"eslint/rules/missing-doc",
	'eslint/rules/no-debugger',
	'eslint/rules/no-dupe-keys',
	'eslint/rules/no-eval',
	'eslint/rules/curly',
	'eslint/rules/new-parens',
	'eslint/rules/no-new-array',
	'eslint/rules/no-new-func',
	'eslint/rules/no-new-object',
	'eslint/rules/no-new-wrappers',
	'eslint/rules/use-isnan',
	'eslint/rules/no-unused-params'
], function(eqeqeq, no_redeclare, no_undef, no_unused_vars, no_use_before_define, semi, no_extra_semi, missing_doc,
				no_debugger, no_dupe_keys, no_eval, curly, new_parens, no_new_array, no_new_func, no_new_object,
				no_new_wrappers, use_isnan, no_unused_params) {
	return function() {
		return {
			"eqeqeq": eqeqeq,
			"no-redeclare": no_redeclare,
			"no-undef": no_undef,
			"no-unused-vars": no_unused_vars,
			"no-use-before-define": no_use_before_define,
			"semi": semi,
			"no-extra-semi": no_extra_semi,
			"missing-func-decl-doc" : missing_doc,
			"missing-func-expr-doc" : missing_doc,
			'no-debugger' : no_debugger,
			'no-dupe-keys' : no_dupe_keys,
			'no-eval' : no_eval,
			'curly' : curly,
			'new-parens' : new_parens,
			'no-new-array': no_new_array,
			'no-new-func': no_new_func,
			'no-new-object': no_new_object,
			'no-new-wrappers': no_new_wrappers,
			'use-isnan' : use_isnan,
			'no-unused-params' : no_unused_params
		};
	};
});
