'use strict'

import NSObject from '../ObjectiveC/NSObject'
import SCNPhysicsBodyType from './SCNPhysicsBodyType'
import SCNPhysicsShape from './SCNPhysicsShape'
import SCNVector3 from './SCNVector3'
import SCNVector4 from './SCNVector4'


/**
 * A set of physics simulation attributes attached to a scene graph node. 
 * @access public
 * @extends {NSObject}
 * @see https://developer.apple.com/reference/scenekit/scnphysicsbody
 */
export default class SCNPhysicsBody extends NSObject {

  /**
   * constructor
   * @access public
   * @returns {void}
   */
  init() {

    // Defining How Forces Affect a Physics Body

    /**
     * An object that defines the solid volume of the physics body for use in collision detection.
     * @type {?SCNPhysicsShape}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514789-physicsshape
     */
    this.physicsShape = null

    /**
     * A constant that determines how the physics body responds to forces and collisions.
     * @type {SCNPhysicsBodyType}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514787-type
     */
    this.type = null

    /**
     * A multiplier affecting how SceneKit applies translations computed by the physics simulation to the node containing the physics body.
     * @type {SCNVector3}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514753-velocityfactor
     */
    this.velocityFactor = null

    /**
     * A multiplier affecting how SceneKit applies rotations computed by the physics simulation to the node containing the physics body.
     * @type {SCNVector3}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514748-angularvelocityfactor
     */
    this.angularVelocityFactor = null

    /**
     * A Boolean value that determines whether the constant gravity of a scene accelerates the body.
     * @type {boolean}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514738-isaffectedbygravity
     */
    this.isAffectedByGravity = false


    // Defining a Body’s Physical Properties

    /**
     * The mass of the body, in kilograms.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514755-mass
     */
    this.mass = 0

    /**
     * The electric charge of the body, in coulombs.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514786-charge
     */
    this.charge = 0

    /**
     * The body’s resistance to sliding motion.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514794-friction
     */
    this.friction = 0

    /**
     * The body’s resistance to rolling motion.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514737-rollingfriction
     */
    this.rollingFriction = 0

    /**
     * A factor that determines how much kinetic energy the body loses or gains in collisions.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514740-restitution
     */
    this.restitution = 0

    /**
     * A factor that reduces the body’s linear velocity.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514763-damping
     */
    this.damping = 0

    /**
     * A factor that reduces the body’s angular velocity.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514792-angulardamping
     */
    this.angularDamping = 0

    /**
     * The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
     * @type {SCNVector3}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514777-momentofinertia
     */
    this.momentOfInertia = null

    /**
     * A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
     * @type {boolean}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514761-usesdefaultmomentofinertia
     */
    this.usesDefaultMomentOfInertia = false


    // Working with Contacts and Collisions

    /**
     * A mask that defines which categories this physics body belongs to.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514768-categorybitmask
     */
    this.categoryBitMask = 0

    /**
     * A mask that defines which categories of bodies cause intersection notifications with this physics body.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514746-contacttestbitmask
     */
    this.contactTestBitMask = 0

    /**
     * A mask that defines which categories of physics bodies can collide with this physics body.
     * @type {number}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514772-collisionbitmask
     */
    this.collisionBitMask = 0


    // Managing a Body’s Motion

    /**
     * A vector describing both the current speed (in meters per second) and direction of motion of the physics body.
     * @type {SCNVector3}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514757-velocity
     */
    this.velocity = null

    /**
     * A vector describing both the current rotation axis and rotational speed (in radians per second) of the physics body.
     * @type {SCNVector4}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514770-angularvelocity
     */
    this.angularVelocity = null

    /**
     * A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.
     * @type {boolean}
     * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514742-allowsresting
     */
    this.allowsResting = false

    this._isResting = false
  }

  // Creating Physics Bodies

  /**
   * Creates a physics body with the specified type and shape.
   * @access public
   * @param {SCNPhysicsBodyType} type - A constant that determines how a body responds to forces and collisions. See SCNPhysicsBodyType.
   * @param {?SCNPhysicsShape} shape - A physics shape defining the volume of the body for collision detection purposes.
   * @returns {void}
   * @desc For the body to participate in collision detection or respond to forces, you must attach it to the physicsBody property of an SCNNode object in a scene.If you pass nil for the shape parameter, SceneKit automatically creates a physics shape for the body when you attach it to a node, based on that node’s geometry property. To create a physics shape that’s based on the geometries of a node and its hierarchy of children, or to control the level of detail in a physics shape, create the physics shape manually using an SCNPhysicsShape class method.NoteFor nodes containing custom geometry, the physics shape SceneKit automatically creates is a rough approximation of the geometry. This approximation, or convex hull, provides a compromise between accuracy and performance in collision detection. For the best collision detection performance, create an SCNPhysicsShape instance based on a basic geometry class (SCNBox, SCNSphere, SCNPyramid, SCNCone, SCNCylinder, or SCNCapsule).
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514797-init
   */
  init(type, shape) {
  }

  /**
   * Creates a physics body that is unaffected by forces or collisions and that cannot move.
   * @access public
   * @returns {SCNPhysicsBody} - 
   * @desc Use static bodies to construct fixtures in your scene that other bodies need to collide with but that do not themselves move, such as floors, walls, and terrain.For the body to participate in collision detection or respond to forces, you must attach it to the physicsBody property of an SCNNode object in a scene.SceneKit automatically creates a physics shape for the body when you attach it to a node, based on that node’s geometry property. To create a physics shape that’s based on the geometries of a node and its hierarchy of children, or to control the level of detail in a physics shape, create the physics shape manually using an SCNPhysicsShape class method.NoteFor nodes containing custom geometry, the physics shape SceneKit automatically creates is a rough approximation of the geometry. This approximation, or convex hull, provides a compromise between accuracy and performance in collision detection. For the best collision detection performance, create an SCNPhysicsShape instance based on a basic geometry class (SCNBox, SCNSphere, SCNPyramid, SCNCone, SCNCylinder, or SCNCapsule).
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514791-static
   */
  static static() {
    return null
  }

  /**
   * Creates a physics body that can be affected by forces and collisions.
   * @access public
   * @returns {SCNPhysicsBody} - 
   * @desc Use dynamic bodies for the elements of your scene that are moved by the physics simulation.For the body to participate in collision detection or respond to forces, you must attach it to the physicsBody property of an SCNNode object in a scene.SceneKit automatically creates a physics shape for the body when you attach it to a node, based on that node’s geometry property. To create a physics shape that’s based on the geometries of a node and its hierarchy of children, or to control the level of detail in a physics shape, create the physics shape manually using an SCNPhysicsShape class method.NoteFor nodes containing custom geometry, the physics shape SceneKit automatically creates is a rough approximation of the geometry. This approximation, or convex hull, provides a compromise between accuracy and performance in collision detection. For the best collision detection performance, create an SCNPhysicsShape instance based on a basic geometry class (SCNBox, SCNSphere, SCNPyramid, SCNCone, SCNCylinder, or SCNCapsule).
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514766-dynamic
   */
  static dynamic() {
    return null
  }

  /**
   * Creates a physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.
   * @access public
   * @returns {SCNPhysicsBody} - 
   * @desc Use kinematic bodies for scene elements that you want to control directly but whose movement manipulates other elements. For example, to allow the user to push objects around with a finger, you might create a kinematic body and attach it to an invisible node that you move follow touch events. (In macOS, use the same technique to allow the user to move objects with the mouse pointer.)For the body to participate in collision detection or respond to forces, you must attach it to the physicsBody property of an SCNNode object in a scene.SceneKit automatically creates a physics shape for the body when you attach it to a node, based on that node’s geometry property. To create a physics shape that’s based on the geometries of a node and its hierarchy of children, or to control the level of detail in a physics shape, create the physics shape manually using an SCNPhysicsShape class method.NoteFor nodes containing custom geometry, the physics shape SceneKit automatically creates is a rough approximation of the geometry. This approximation, or convex hull, provides a compromise between accuracy and performance in collision detection. For the best collision detection performance, create an SCNPhysicsShape instance based on a basic geometry class (SCNBox, SCNSphere, SCNPyramid, SCNCone, SCNCylinder, or SCNCapsule).
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514776-kinematic
   */
  static kinematic() {
    return null
  }

  // Applying Forces, Impulses, and Torques

  /**
   * Applies a force or impulse to the body at its center of mass.
   * @access public
   * @param {SCNVector3} direction - The direction and magnitude of the force (in newtons) or of the impulse (in newton-seconds).
   * @param {boolean} impulse - true to apply an instantaneous change in momentum; false to apply a force that affects the body at the end of the simulation step.
   * @returns {void}
   * @desc Applying a force or impulse to a body imparts a linear acceleration proportional to its mass.The impulse parameter determines how this method contributes to the physics simulation:If you specify true, SceneKit treats the direction parameter as an impulse, measured in newton-seconds, and accelerates the physics body immediately. Use this option to simulate instantaneous effects such as launching a projectile.If you specify false, SceneKit treats the direction parameter as a force, measured in newtons. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces applied to the physics body during that step and accelerates the body according to the net effect of those forces. Use this option when you want to simulate continuous forces on the body by calling applyForce(_:asImpulse:) on each simulation step.NoteThe impulse parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.As with all physical quantities in SceneKit, you need not use realistic force measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514801-applyforce
   */
  applyForceAsImpulse(direction, impulse) {
  }

  /**
   * Applies a force or impulse to the body at a specific point.
   * @access public
   * @param {SCNVector3} direction - The direction and magnitude of the force (in newtons) or of the impulse (in newton-seconds).
   * @param {SCNVector3} position - The point on the body where the force or impulse should be applied, in the local coordinate system of the SCNNode object containing the physics body.
   * @param {boolean} impulse - true to apply an instantaneous change in momentum; false to apply a force that affects the body at the end of the simulation step.
   * @returns {void}
   * @desc Applying a force or impulse to a body at a position other than its center of mass may impart both linear and angular acceleration, depending on how the body is situated in the physics world and the other forces acting upon it.The impulse parameter determines how this method contributes to the physics simulation:If you specify true, SceneKit treats the direction parameter as an impulse, measured in newton-seconds, and accelerates the physics body immediately. Use this option to simulate instantaneous effects such as launching a projectile.If you specify false, SceneKit treats the direction parameter as a force, measured in newtons. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces applied to the physics body during that step and accelerates the body according to the net effect of those forces. Use this option when you want to simulate continuous forces on the body by calling applyForce(_:at:asImpulse:) on each simulation step.NoteThe impulse parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.As with all physical quantities in SceneKit, you need not use realistic force measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514750-applyforce
   */
  applyForceAtAsImpulse(direction, position, impulse) {
  }

  /**
   * Applies a net torque or a change in angular momentum to the body.
   * @access public
   * @param {SCNVector4} torque - The direction and magnitude of the torque (in newton-meters) or of the change of angular momentum (in newton-meter-seconds), relative to the world coordinate space of the scene. 
   * @param {boolean} impulse - true to apply an instantaneous change in angular momentum; false to apply a torque that affects the body at the end of the simulation step.
   * @returns {void}
   * @desc Applying a torque to a body changes its angular velocity by an amount related to its mass and shape, rotating it without affecting its linear acceleration. Each component of the torque vector relates to rotation about the corresponding axis in the local coordinate system of the SCNNode object containing the physics body. For example, applying a torque of {0.0, 0.0, 1.0} causes a node to spin counterclockwise around the world-space z-axis.The impulse parameter determines how this method contributes to the physics simulation:If you specify true, SceneKit treats the direction parameter as an instantaneous change in angular momentum, measured in newton-meter-seconds.If you specify false, SceneKit treats the direction parameter as a torque, measured in newton-meters. At the end of each simulation step (by default, a step occurs once for each frame in the rendering loop), SceneKit sums all forces and torques applied to the physics body during that step and accelerates the body according to the net effect of those forces and torques. Use this option when you want to simulate gradual acceleration by calling applyTorque(_:asImpulse:) on each simulation step.NoteThe impulse parameter effectively changes the unit of magnitude. A value that results in a certain acceleration when applied continuously on each frame of the simulation results in much less acceleration if applied only during a single frame.As with all physical quantities in SceneKit, you need not use realistic force and torque measurements in your app—the effects of the physics simulation depend on the relative differences between forces, not on their absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514752-applytorque
   */
  applyTorqueAsImpulse(torque, impulse) {
  }

  /**
   * Cancels all continuous forces and torques acting on the physics body during the current simulation step.
   * @access public
   * @returns {void}
   * @desc When you pass false for the impulse parameter in the applyForce(_:asImpulse:), applyForce(_:at:asImpulse:), or applyTorque(_:asImpulse:) method, SceneKit waits until the end of the current simulation step before applying its effect. At that time, SceneKit sums all forces and torques applied during that simulation step and changes the velocity or angular velocity of the body according to the net effect of those forces and torques.Call clearAllForces() to cancel any forces and torques previously applied during the current simulation step.
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514735-clearallforces
   */
  clearAllForces() {
  }

  // Managing a Body’s Motion
  /**
   * A Boolean value that indicates whether the physics body is at rest.
   * @type {boolean}
   * @desc This property’s default value is false, but SceneKit’s physics simulation may automatically set it to true if the body is not moving and not affected by any forces. A resting body does not participate in the simulation until another body collides with it or you change its position or velocity or apply a force to it.
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514795-isresting
   */
  get isResting() {
    return this._isResting
  }

  // Synchronizing a Physics Body with its Node

  /**
   * Updates the position and orientation of a body in the physics simulation to match that of the node to which the body is attached.
   * @access public
   * @returns {void}
   * @desc If you change the position or orientation of a node with an attached static or dynamic physics body, call this method afterward to ensure that the physics simulation incorporates the change. You need not call this method for kinematic bodies.Note that dynamic and physics bodies are designed to be moved only by the physics simulation or not at all. You may use this method to move them regardless of this restriction, but at a cost to performance.
   * @see https://developer.apple.com/reference/scenekit/scnphysicsbody/1514782-resettransform
   */
  resetTransform() {
  }
}