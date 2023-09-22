import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class TrafficSignal extends JFrame implements ItemListener {
    private JRadioButton jr1;
    private JRadioButton jr2;
    private JRadioButton jr3;
    private JTextField j1 = new JTextField(10);
    private ButtonGroup b = new ButtonGroup();
    private String msg = " ";
    private int x = 0, y = 0, z = 0;

    public TrafficSignal(String msg) {
        super(msg);
        setLayout(new FlowLayout());

        jr1 = new JRadioButton("Red");
        jr2 = new JRadioButton("Yellow");
        jr3 = new JRadioButton("Green");

        jr1.addItemListener(this);
        jr2.addItemListener(this);
        jr3.addItemListener(this);

        add(jr1);
        add(jr2);
        add(jr3);
        b.add(jr1);
        b.add(jr2);
        b.add(jr3);
        add(j1);

        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
    }

    public void itemStateChanged(ItemEvent ie) {
        if (ie.getSource() == jr1) {
            if (ie.getStateChange() == 1) {
                msg = "Stop!";
                x = 1;
                repaint();
            } else {
                msg = "";
            }
        }
        if (ie.getSource() == jr2) {
            if (ie.getStateChange() == 1) {
                msg = "Get Ready to go!";
                y = 1;
                repaint();
            } else {
                msg = "";
            }
        }
        if (ie.getSource() == jr3) {
            if (ie.getStateChange() == 1) {
                msg = "Go!!";
                z = 1;
                repaint();
            } else {
                msg = "";
            }
        }
        j1.setText(msg);
    }

    public void paint(Graphics g) {
        g.drawRect(100, 105, 110, 270);
        g.drawOval(120, 150, 60, 60);
        g.drawOval(120, 230, 60, 60);
        g.drawOval(120, 300, 60, 60);

        if (x == 1) {
            g.setColor(Color.RED);
            g.fillOval(120, 150, 60, 60);
            g.setColor(Color.WHITE);
            g.fillOval(120, 230, 60, 60);
            g.setColor(Color.WHITE);
            g.fillOval(120, 300, 60, 60);
        }
        if (y == 1) {
            g.setColor(Color.WHITE);
            g.fillOval(120, 150, 60, 60);
            g.setColor(Color.YELLOW);
            g.fillOval(120, 230, 60, 60);
            g.setColor(Color.WHITE);
            g.fillOval(120, 300, 60, 60);
        }
        if (z == 1) {
            g.setColor(Color.WHITE);
            g.fillOval(120, 150, 60, 60);
            g.setColor(Color.WHITE);
            g.fillOval(120, 230, 60, 60);
            g.setColor(Color.GREEN);
            g.fillOval(120, 300, 60, 60);
        }
        x = 0;
        y = 0;
        z = 0;
    }

    public static void main(String args[]) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                TrafficSignal trafficSignal = new TrafficSignal("Traffic Light");
                trafficSignal.setSize(500, 500);
                trafficSignal.setVisible(true);
                
                // Timer to automatically change the traffic signal colors
                Timer timer = new Timer(3000, new ActionListener() {
                    private int colorIndex = 0;
                    private int yellowDuration = 1000; // 1 second in milliseconds
                
                    public void actionPerformed(ActionEvent e) {
                        if (colorIndex == 0) {
                            trafficSignal.jr1.setSelected(true);
                            colorIndex = 1;
                            System.out.println("Red");
                        } else if (colorIndex == 1) {
                            trafficSignal.jr2.setSelected(true);
                            colorIndex = 2;
                            System.out.println("Yellow");
                
                            // Schedule a Timer to switch to green after 1 second
                            Timer yellowTimer = new Timer(yellowDuration, new ActionListener() {
                                public void actionPerformed(ActionEvent e) {
                                    trafficSignal.jr2.setSelected(false);
                                    trafficSignal.jr3.setSelected(true);
                                    System.out.println("Green");
                                    colorIndex=0;
                                }
                            });
                            yellowTimer.setRepeats(false);
                            yellowTimer.start();
                        } 
                    }
                });
                timer.start();
            }
        });
    }
}