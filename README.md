# node-red-contrib-remote-io
[Node-RED](http://nodered.org/) nodes to easily use WAGO 750 Modules. 

# Description:
	Remote IO nodes make it simple to receive and send data in/out of Modbus registers.
	Scaling functions and diagnostics are built in when available.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
	NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
	WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Author: 
	"Jesse James Cox (https://github.com/jessejamescox), (https://www.npmjs.com/~jessejamescox)",
	"Kurtl Braun (https://github.com/braunku), (https://www.npmjs.com/~kurtlbraun)",
	"Christophe Icard (https://github.com/Ekristoffe), (https://www.npmjs.com/~ekristoffe)"
	
# Typical pitfall:
	With 750-3xx or 750-8xx
	You dial with a WAGO Ethernet controller.
	Try to set outputs - but nothing happens!
	WAGO Ethernet controller provide a "owner" policy for physical outputs.
	The "owner" could be CoDeSys-Runtime or Fieldbus-Master.
	Every time you download a PLC program the CoDeSys-Runtime becomes "owner" of physical outputs.
	Use tool "WAGO Ethernet Settings" and do "Reset File System",
	it is the easiest way to assign Modbus-Master as "owner".
	Alternatively you can "Login" with CoDeSys-IDE and perform "Reset(original)".

	With 750-8xxx
	By default there is no Modbus server available, you must use e!Cockpit to create your own Modbus server.
	
# Example
##Example
![Example](https://github.com/Ekristoffe/node-red-contrib-remote-io/blob/master/wago/icons/old/flow_example.png)

![Example](https://github.com/Ekristoffe/node-red-contrib-remote-io/blob/master/wago/icons/old/flow_example2.png)

	https://github.com/Ekristoffe/node-red-contrib-remote-io/blob/master/wago/icons/old/flow_example.png

	https://github.com/Ekristoffe/node-red-contrib-remote-io/blob/master/wago/icons/old/flow_example2.png

	
# Release Note
* 0.0.1 (npm 1.0.1)	First release
* 0.0.2 (npm 1.0.2)	package.json updated
* 0.0.3 (npm 1.0.3)	Readme and package.json updated
* 0.0.4 (npm 1.0.4)	Readme and package.json updated
* 0.0.5 (npm 1.0.5)	Readme and package.json updated
* 0.0.6 (npm 1.0.6)	Nodes color change + package.json updated
* 0.0.7 (npm 1.0.7)	Readme and package.json updated
* 0.0.8 (npm 1.0.8)	Temperature status added and package.json updated
* 0.0.9 (npm 2.0.0)	Analog output fixed to fload + Nodes color change + New icons + package.json updated
* 0.1.0 (npm 2.0.1)	License change from GNU to MIT + Nodes color change + New icons + Readme and package.json updated
* 0.1.1 (npm 0.1.3)	License change from GNU to MIT + Nodes color change + New icons + Readme and package.json updated
* 0.1.4 (npm 0.1.x)	Total rebuild from scratch of AI, AO, DI, DO, Temp, added 753-647 + Readme and package.json updated

