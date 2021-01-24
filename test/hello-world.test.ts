import { hello } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe("Hello function", () => {
	it('Should return hello world', () => {
		const result = hello();
		expect(result).to.equal('Hello world');
	})
})