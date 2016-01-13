var postcss = require('postcss');

module.exports = postcss.plugin('assemble-modal-helper', function (options) {
    return function (css) {

        css.walkRules(function (rule) {
            var modalWidthRule = rule.selector;

            if (modalWidthRule == '.modal-widths') {
                rule.walkDecls(function (decl, i) {
                    var property = decl.prop,
                        value = decl.value,
                        origRule = decl.parent,
                        ruleSelectors = origRule.selectors,
                        newRule;

                    ruleSelectors = ruleSelectors.map(function(ruleSelector){
                        return 'body[data-current-modal*="_' + property + '"]' + ' .modal-inner';
                    }).join(',\n');

                    // Insert the new rule before the original rule.
                    newRule = origRule.cloneBefore({
                        selector: ruleSelectors
                    }).removeAll();

                    newRule.append('width:' + value + ';');
                });

                // Remove the original rule.
                rule.remove();
            }
        });
    };
});