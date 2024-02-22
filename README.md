# MakeCode Extension For Emakefun Five Line Tracker

## Introduction

## Usage

## Example

### Print analog and digital values

You can copy the code from below or view the project (blocks and JavaScript view) [here](https://makecode.microbit.org/_fkTWV464iRJc).

```block
let five_line_tracker = emakefun.createFiveLineTracker(80)
five_line_tracker.setSensitivity(500)
basic.forever(function() {
  serial.writeString('digital values:')
  serial.writeNumber(five_line_tracker.digitalValue(0))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.digitalValue(1))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.digitalValue(2))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.digitalValue(3))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.digitalValue(4))
  serial.writeString(', analog values:')
  serial.writeNumber(five_line_tracker.analogValue(0))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.analogValue(1))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.analogValue(2))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.analogValue(3))
  serial.writeString(', ')
  serial.writeNumber(five_line_tracker.analogValue(4))
  serial.writeLine('')
  basic.pause(100)
})
```

## Supported targets

- for PXT/microbit

## License

MIT
