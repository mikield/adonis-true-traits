"use strict";
/*
* Traits (Mixins) Builder with a global (mix) function
*
* (c) Vladyslav Gaysyuk <hello@mikield.rocks>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const fold_1 = require("@adonisjs/fold");
class TraitsBuilderServiceProvider extends fold_1.ServiceProvider {
    /**
    * The register method called by ioc container
    * as a life-cycle method
    *
    * @method register
    *
    * @return {void}
    */
    register() {
        class TraitsBuilder {
            constructor(ExtendedClass) {
                this.ExtendedClass = ExtendedClass;
            }

            with(...traits) {
                return traits.reduce((extended, trait) => trait(extended), this.ExtendedClass);
            }
        }
        global.mix = (ExtendedClass) => new TraitsBuilder(ExtendedClass);
    }
}
module.exports = TraitsBuilderServiceProvider;
