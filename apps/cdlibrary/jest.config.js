module.exports = {
  name: 'cdlibrary',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cdlibrary',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
