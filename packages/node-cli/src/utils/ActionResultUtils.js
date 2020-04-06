/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
'use strict';

const { ERROR } = require('../services/actionresult/ActionResult');
const { lineBreak } = require('../loggers/LoggerConstants');

module.exports = {
	getErrorMessagesString: actionResult => {
		return actionResult.errorMessages.join(lineBreak);
	},

	logResultMessage: (actionResult, log) => {
		if (actionResult.resultMessage) {
			if (actionResult.status === ERROR) {
				log.error(actionResult.resultMessage);
			} else {
				log.result(actionResult.resultMessage);
			}
		}
	},
};
