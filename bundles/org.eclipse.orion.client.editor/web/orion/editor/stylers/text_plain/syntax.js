/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*global define*/

define("orion/editor/stylers/text_plain/syntax", ["orion/editor/stylers/lib/syntax"], function(mLib) { //$NON-NLS-1$ //$NON-NLS-0$
	var keywords = [
		"and", "as", "assert", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"boolean", "break", //$NON-NLS-0$
		"class", "char", "continue", //$NON-NLS-1$ //$NON-NLS-0$
		"def", "del", "double", //$NON-NLS-1$ //$NON-NLS-0$
		"exec", "elif", "else", "except", "Ellipsis", //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"False", "false", "file", "finally", "for", "from", "funct", //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"global", //$NON-NLS-0$
		"if", "import", "in", "input", "int", "is", //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"lambda", "lang", //$NON-NLS-0$
		"not", "None", "NotImplemented", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"or", "output", //$NON-NLS-0$
		"pass", "print", //$NON-NLS-1$ //$NON-NLS-0$
		"raise", "return", //$NON-NLS-1$ //$NON-NLS-0$
		"string",
		"try", "True", "true", //$NON-NLS-1$ //$NON-NLS-0$
		"void",
		"while", "with", //$NON-NLS-1$ //$NON-NLS-0$
		"yield" //$NON-NLS-0$
	];

	var base_functions = [
		"assert",
		"insert",
		"main",
		"readlines", "remove", "replace",
		"size"
	];

	var base_variables = [
		"__main__",
		"verbose"
	];

	var grammars = mLib.grammars;
	grammars.push({
		id: "orion.svel", //$NON-NLS-0$
		contentTypes: ["text/plain"], //$NON-NLS-1$
		patterns: [
			{include: "orion.lib#string_doubleQuote"}, //$NON-NLS-0$
			{include: "orion.lib#string_singleQuote"}, //$NON-NLS-0$
			{include: "orion.c-like#comment_singleLine"}, //$NON-NLS-0$
			{include: "orion.lib#doc_block"}, //$NON-NLS-0$
			{include: "orion.c-like#comment_block"}, //$NON-NLS-0$
			{include: "orion.lib#brace_open"}, //$NON-NLS-0$
			{include: "orion.lib#brace_close"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_open"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_close"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_open"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_close"}, //$NON-NLS-0$
			{include: "orion.lib#number_decimal"}, //$NON-NLS-0$
			{include: "orion.lib#number_hex"}, //$NON-NLS-0$
			{include: "#base_functions"}, //$NON-NLS-0$
			{include: "#base_variables"}, //$NON-NLS-0$
			{
				match: "\\b(?:" + keywords.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "keyword.control.svel" //$NON-NLS-0$
			}
		],
		repository: {
			base_functions: {
				match: "\\b(?:" + base_functions.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "support.function.svel" //$NON-NLS-0$
			},
			base_variables: {
				match: "\\b(?:" + base_variables.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "support.variable.svel" //$NON-NLS-0$
			}
		}
	});
	return {
		id: grammars[grammars.length - 1].id,
		grammars: grammars,
		keywords: keywords
	};
});
