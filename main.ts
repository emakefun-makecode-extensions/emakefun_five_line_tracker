//% block="Emakefun"
namespace emakefun {
  /**
   * Create a new Emakefun Five Live Tracker instance
   * @param i2c_address I2C address of the board, default 0x50
   */
  //% block="create Emakefun Five Live Tracker with I2C address $i2c_address"
  //% subcategory="FiveLineTracker"
  //% blockSetVariable=five_line_tracker
  //% i2c_address.defl=0x50
  //% weight=100
  export function createFiveLineTracker(i2c_address: number = 0x50): FiveLineTracker {
    return new FiveLineTracker(i2c_address);
  }

  export class FiveLineTracker {
    private readonly i2c_address_: number = undefined

    /**
     * Constructor
     * @param i2c_address I2C address of the module, default 0x50
     */
    constructor(i2c_address: number = 0x50) {
      this.i2c_address_ = i2c_address;
    }

    /**
     * Set sensitivity
     * @param sensitivity sensitivity value, 0 ~ 1023
     */
    //% block="$this set sensitivity to $sensitivity"
    //% subcategory="FiveLineTracker"
    //% this.defl=five_line_tracker
    //% sensitivity.min=0
    //% sensitivity.max=1023
    //% weight=99
    setSensitivity(sensitivity: number) {
      pins.i2cWriteBuffer(this.i2c_address_, Buffer.pack('<BH', [0x00, sensitivity]));
    }

    /**
     * Get sensitivity
     * @return sensitivity value
     */
    //% block="$this get sensitivity"
    //% subcategory="FiveLineTracker"
    //% this.defl=five_line_tracker
    sensitivity(): number {
      pins.i2cWriteNumber(this.i2c_address_, 0x00, NumberFormat.UInt8LE);
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt16LE);
    }


    /**
     * Read analog value of sensors
     * @param index sensor index, 0 ~ 4
     * @return analog value of sensor
     */
    //% block="$this read analog value of sensor $index"
    //% subcategory="FiveLineTracker"
    //% this.defl=five_line_tracker
    //% index.min=0
    //% index.max=4
    analogValue(index: number): number {
      pins.i2cWriteNumber(this.i2c_address_, 2 + (index << 1), NumberFormat.UInt8LE);
      return pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt16LE);
    }

    /**
     * Read digital value of sensors
     * @param index sensor index, 0 ~ 4
     * @return digital value of sensor
     */
    //% block="$this read digital value of sensor $index"
    //% subcategory="FiveLineTracker"
    //% this.defl=five_line_tracker
    //% index.min=0
    //% index.max=4
    digitalValue(index: number): number {
      pins.i2cWriteNumber(this.i2c_address_, 0x0C, NumberFormat.UInt8LE);
      return (pins.i2cReadNumber(this.i2c_address_, NumberFormat.UInt8LE) >> index) & 0x01;
    }
  }
}