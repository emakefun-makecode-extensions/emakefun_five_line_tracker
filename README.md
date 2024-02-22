# MakeCode Extension For Emakefun Five Line Tracker

## Introduction

## Usage

## Example

### Print analog and digital values

You can copy the code from below or view the project (blocks and JavaScript view) [here](https://makecode.microbit.org/_HJogdWHd7LA4).

```block
let analog_values: number[] = [];
let digital_vales: number[] = [];
let five_line_tracker = emakefun.createFiveLineTracker(80);
five_line_tracker.setSensitivity(500);
basic.forever(function() {
  digital_vales = [
    five_line_tracker.digitalValue(0),
    five_line_tracker.digitalValue(1),
    five_line_tracker.digitalValue(2),
    five_line_tracker.digitalValue(3),
    five_line_tracker.digitalValue(4)
  ]
  serial.writeString('digital values:')
  serial.writeNumbers(digital_vales)
  analog_values = [
    five_line_tracker.analogValue(0),
    five_line_tracker.analogValue(1),
    five_line_tracker.analogValue(2),
    five_line_tracker.analogValue(3),
    five_line_tracker.analogValue(4)
  ]
  serial.writeString('analog values:')
  serial.writeNumbers(analog_values)
  basic.pause(100)
})
```

## Supported targets

- for PXT/microbit

## License

MIT
