import elasticlunr from 'elasticlunr';

const makeIndex = (fields) => {
    const index = elasticlunr();
    fields.map((field) => (
        index.addField(field)
    ));
    return index;
};

export default makeIndex;