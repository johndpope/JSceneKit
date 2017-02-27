'use strict'

import NSObject from '../ObjectiveC/NSObject'
import SCNScene from './SCNScene'
import SCNSceneSourceStatusHandler from './SCNSceneSourceStatusHandler'

const _AnimationImportPolicy = {
  doNotPlay: Symbol(),
  play: Symbol(),
  playRepeatedly: Symbol(),
  playUsingSceneTimeBase: Symbol()
}

const _LoadingOption = {
  animationImportPolicy: Symbol(),
  assetDirectoryURLs: Symbol(),
  checkConsistency: Symbol(),
  convertToYUp: Symbol(),
  convertUnitsToMeters: Symbol(),
  createNormalsIfAbsent: Symbol(),
  flattenScene: Symbol(),
  overrideAssetURLs: Symbol(),
  preserveOriginalTopology: Symbol(),
  strictConformance: Symbol(),
  useSafeMode: Symbol()
}


/**
 * Manages the data-reading tasks associated with loading scene contents from a file or data.
 * @access public
 * @extends {NSObject}
 * @see https://developer.apple.com/reference/scenekit/scnscenesource
 */
export default class SCNSceneSource extends NSObject {

  // Creating a Scene Source

  /**
   * Initializes a scene source for reading the scene graph from a specified file.
   * @access public
   * @param {string} url - The URL identifying the scene.
   * @param {?Map<SCNSceneSource.LoadingOption, Object>} [options = null] - A dictionary containing options that affect scene loading. See Scene Loading Options for available keys and values. Pass nil to use default options.
   * @returns {void}
   * @desc If you have the contents of a scene file but not the file itself (for example, if your app downloads scene files from the network), use the init(data:options:) method instead.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1522629-init
   */
  init(url, options = null) {

    // Getting Information about the Scene

    this._url = null
    this._data = null
  }

  // Loading a Complete Scene

  /**
   * Loads the entire scene graph from the scene source and calls the specified block to provide progress information.
   * @access public
   * @param {?Map<SCNSceneSource.LoadingOption, Object>} [options = null] - A dictionary containing options that affect scene loading. See Scene Loading Options for available keys and values. Pass nil to use default options.
   * @param {?SCNSceneSourceStatusHandler} [statusHandler = null] - An SCNSceneSourceStatusHandler block. SceneKit calls this block periodically to report progress while loading the scene.
   * @returns {?SCNScene} - 
   * @desc Use this method if you need to monitor progress while loading a scene from the scene source. For simpler scene loading, use the scene(options:) method or the SCNScene method init(url:options:).A scene source can contain objects that are not part of its scene graph. To obtain these objects, you must load them individually with the the entryWithIdentifier:withClass: or entries(passingTest:) method. For example, a scene file containing a game character could include several animations for the character geometry (such as running, jumping, and standing idle). Because you typically do not apply multiple animations at once, the scene file contains these animations without their being attached to the character geometry.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1522887-scene
   */
  scene(options = null, statusHandler = null) {
    return null
  }

  // Loading and Inspecting Scene Elements

  /**
   * Returns the identifiers for all objects in the scene source of the specified class.
   * @access public
   * @param {Object} entryClass - The class of objects to find identifiers for.
   * @returns {string[]} - 
   * @desc SceneKit recognizes objects of the following classes in scene files:CAAnimationNSImageSCNCameraSCNGeometrySCNLightSCNMaterialSCNMorpherSCNNodeSCNSceneSCNSkinnerEach object in a scene file has an identifier that is unique for its class. These identifiers are determined by the software that created the scene file—for example, they may be descriptive names assigned by an artist using 3D authoring tools. For SceneKit classes with a name property (such as nodes and geometries), the name of an object loaded from a scene file is based on its identifier in the scene file.Use this method to enumerate all objects in a scene file of a specified class without loading the objects and their content. For example, the following code finds the identifiers for all animations stored in a scene source:NSArray *animations = [sceneSource identifiersOfEntriesWithClass:[CAAnimation class]];
NSArray *animations = [sceneSource identifiersOfEntriesWithClass:[CAAnimation class]];

   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1523656-identifiersofentries
   */
  identifiersOfEntriesWithClass(entryClass) {
    return null
  }

  /**
   * Loads and returns all objects in the scene source that pass the test in a given block.
   * @access public
   * @param {function(arg1: Object, arg2: string, arg3: UnsafeMutablePointer<ObjCBool>): boolean} predicate - The block to be applied to each object in the scene source.The block takes three parameters:entryThe object to be tested.identifierThe unique identifier of the object in the scene source.stopA reference to a Boolean value. Set *stop to true within the block to abort further processing of the scene source’s contents.The block returns a Boolean value indicating whether the entry object passed the test and should be included in the method’s returned array.
   * @returns {Object[]} - 
   * @desc SceneKit recognizes objects of the following classes in scene files:CAAnimationNSImageSCNCameraSCNGeometrySCNLightSCNMaterialSCNMorpherSCNNodeSCNSceneSCNSkinnerEach object in a scene file has an identifier that is unique for its class. These identifiers are determined by the software that created the scene file—for example, they may be descriptive names assigned by an artist using 3D authoring tools. For SceneKit classes with a name property (such as nodes and geometries), the name of an object loaded from a scene file is based on its identifier in the scene file.Use this method to selectively load objects from a scene source matching criteria you specify. For example, the following code loads from a scene file only the nodes that have attached geometry:NSArray *geometryNodes = [sceneSource entriesPassingTest:^BOOL(id entry, NSString *identifier, BOOL *stop) {
    if ([entry isKindOfClass:[SCNNode class]]) {
        SCNNode *node = (SCNNode *)entry;
        return (node.geometry != nil);
    } else {
        return NO;
    }
}];
NSArray *geometryNodes = [sceneSource entriesPassingTest:^BOOL(id entry, NSString *identifier, BOOL *stop) {
    if ([entry isKindOfClass:[SCNNode class]]) {
        SCNNode *node = (SCNNode *)entry;
        return (node.geometry != nil);
    } else {
        return NO;
    }
}];

   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1523055-entries
   */
  entriesPassingTest(predicate) {
    return null
  }

  // Getting Information about the Scene

  /**
   * Returns metadata about the scene.
   * @access public
   * @param {string} key - A constant identifying a metadata property of the scene source. See Scene Source Properties for available keys and the formats of their values.
   * @returns {?Object} - 
   * @desc This method returns information about the scene that is defined in the file but is not directly referenced by the scene.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1523277-property
   */
  propertyForKey(key) {
    return null
  }
  /**
   * The URL identifying the file from which the scene source was created.
   * @type {?string}
   * @desc The value of this property is nil if the scene source was not created using the sceneSourceWithURL:options: or init(url:options:) method.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1524038-url
   */
  get url() {
    return this._url
  }
  /**
   * The data object from which the scene source loads scene content.
   * @type {?Data}
   * @desc If the scene source was created using the sceneSourceWithData:options: or init(data:options:) method, this property’s value is the data from which the scene source was created. If the scene source was created from a scene file using the the sceneSourceWithURL:options: or init(url:options:) method, this property’s value is the data loaded from that URL at the time the scene source was created.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1523061-data
   */
  get data() {
    return this._data
  }

  // Instance Methods

  /**
   * 
   * @access public
   * @param {string} uid - 
   * @param {T.Type} entryClass - 
   * @returns {Object} - 
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/2805685-entrywithidentifier
   */
  entryWithIdentifierWithClass(uid, entryClass) {
    return null
  }

  // Structures
  /**
   * @type {Object} AnimationImportPolicy
   * @property {Symbol} doNotPlay Animations are not loaded from the scene file.
   * @property {Symbol} play Animations loaded from the scene file are immediately added to the scene and played once.
   * @property {Symbol} playRepeatedly Animations loaded from the scene file are immediately added to the scene and played repeatedly.
   * @property {Symbol} playUsingSceneTimeBase Animations loaded from the scene file are immediately added to the scene and played according to the scene’s sceneTime property.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource.animationimportpolicy
   */
  static get AnimationImportPolicy() {
    return _AnimationImportPolicy
  }
  /**
   * @type {Object} LoadingOption
   * @property {Symbol} animationImportPolicy An option for controlling the playback of animations in a scene file.
   * @property {Symbol} assetDirectoryURLs Locations to use for resolving relative URLs to external resources.
   * @property {Symbol} checkConsistency An option to validate scene files while loading.
   * @property {Symbol} convertToYUp An option for whether to transform assets loaded from the scene file for use in a coordinate system where the y-axis points up.
   * @property {Symbol} convertUnitsToMeters An option for whether to automatically scale the scene’s contents.
   * @property {Symbol} createNormalsIfAbsent An option for automatically generating surface normals if they are absent when loading geometry.
   * @property {Symbol} flattenScene An option for automatically merging portions of a scene graph during loading.
   * @property {Symbol} overrideAssetURLs An option to attempt loading external resources using their URLs as specified in a scene file.
   * @property {Symbol} preserveOriginalTopology 
   * @property {Symbol} strictConformance An option to interpret scene files exactly as specified by the scene file format.
   * @property {Symbol} useSafeMode An option to limit filesystem and network access for external resources referenced by a scene file.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource.loadingoption
   */
  static get LoadingOption() {
    return _LoadingOption
  }
}