import 'chai/register-expect';
import { jsonapiModule, _testing } from '../src/jsonapi-vuex.js';

// 'global' variables (redefined in beforeEach)

var state, item1, item2, norm_item1, norm_item2, record, norm_record

beforeEach(function() {
// Set up commonly used data objects

  state = {records: {}}

  item1 = {
    id: '1',
    type: 'widget',
    attributes: {'foo': 1}
    }

  item2 = {
    id: '2',
    type: 'widget',
    attributes: {'foo': 2}
  }

  norm_item1 = {
    'widget': {
      '1': {
        attributes: {'foo': 1}
      }
    }
  }

  norm_item2 = {
    'widget': {
      '2': {
        attributes: {'foo': 2}
      }
    }
  }

  record = [
    item1, item2
  ]

  norm_record = {widget: {...norm_item1['widget'], ...norm_item2['widget']}}

})

describe("jsonapi-vuex tests", function() {

  it("should export jsonapiModule", function() {
    expect(jsonapiModule).to.exist;
  });

  describe("jsonapiModule actions", function() {

    it("should export actions", function() {
      expect(_testing.actions).to.be.an('object');
    });
    describe("fetch", function() {
        it("should make an api call to GET item(s)")
        it("should add record(s) to the store")
        it("should fail gracefully")
    })

    describe("create", function() {
      it("should make an api call to POST item(s)")
      it("should add record(s) to the store")
      it("should fail gracefully")
    })

    describe("update", function() {
      it("should make an api call to PATCH item(s)")
      it("should update record(s) in the store")
      it("should fail gracefully")

    })

    describe("delete", function() {
      it("should make an api call to DELETE item(s)")
      it("should delete record(s) from the store")
      it("should fail gracefully")
    })
  });

  describe("jsonapiModule mutations", function() {
    it("should export mutations", function() {
      expect(_testing.mutations).to.be.an('object');
    });
  });

  describe("jsonapiModule helpers", function() {
    describe("addRecord", function() {
      it("should add a record to Vue store", function() {
        const { addRecord } = _testing
        addRecord(state, record)
        expect(state['records']).to.have.key('widget')
      });
    });
    describe("normalizeItem", function() {
      it("should normalize a single item", function() {
        const { normalizeItem } = _testing
        expect(normalizeItem(item1)).to.deep.equal(norm_item1)
      });
    })


    describe("normalize", function() {
      it("should normalize a single item", function() {
        const { normalize } = _testing
        expect(normalize(item1)).to.deep.equal(norm_item1)
      });

      it("should normalize an array of records", function() {
        const { normalize } = _testing
        expect(normalize(record)).to.deep.equal(norm_record)
      });
    }); // normalize

    describe("denormalize", function() {
      it("should denormalize multiple items", function() {
        const { denormalize } = _testing
        expect(denormalize(norm_record)).to.deep.equal(record)

      });

      it("should denormalize a single item", function() {
        const { denormalize } = _testing
        expect(denormalize(norm_item1)).to.deep.equal(item1)
      });

    }); // denormalize
  }); // Helper methods

  describe("jsonapiModule getters", function() {
    it("should export getters", function() {
      expect(_testing.getters).to.be.an('object');
    });
  }); // getters

});
