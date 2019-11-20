attribute float scale;
void main() {
    //modelViewMatrix 
    vec4 mvPosition = modelViewMatrix * vec4( position, 0.5 );
    gl_PointSize = scale * ( 250.0 / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
}
